# Next.js, Module Federation, SSR & CSS Modules

This is an example of how Module Federation can be used in a Next.js app. The remote app exposes modules using CSS Modules. The host consumes those modules both server-side and client-side. CSS is rendered server-side to avoid a flash of unstyled content (FOUC). The remote app also generates a build that can be used as a fallback with React Suspense and Error Boundary if the remote is down.

If the remote changes, the host document can be revalidated using the on-demand Incremental Static Regeneration (ISR) from Next.js, and chunks are flushed using the nextjs-mf dedicated util. The Next.js revalidate function is called in an /api route. We call this route when the remote server starts.

Even if SSR is used, the host is still able to use the automatic static optimization feature from Next.js in order to have static files.

# Issue with @module-federation/node flushChunks() util

If the remote changes, the first revalidation works great to update the host server. But, if the remote changes again, the revalidation doesn’t work anymore.

## How to reproduce

In order to build and start correctly the host and the remote, edit your hosts to authorize custom hostnames:

1. `vim /etc/hosts`. Sudo if needed.
1. Add `127.0.0.1 app-shell` and `127.0.0.1 host` after the localhost line.
1. Remove those once your tests with this repository are done.

Then, in the project:

1. Install deps in workspaces: `npm i` in /with-css-modules-ssr-isr
1. Build the remote: `npx nx run @with-css-modules-ssr-isr/app-shell:build`
1. Start the remote: `npx nx run @with-css-modules-ssr-isr/app-shell:start`
1. In another terminal tab, build the host: `npx nx run @with-css-modules-ssr-isr/host:build`
1. Start the host: `npx nx run @with-css-modules-ssr-isr/host:start`
1. Visit http://app-shell:3000/ and http://host:3001/

Now, update a file from the remote:

1. Edit `./app-shell/components/Header.module.css`. For example change the background color.
1. Stop the app-shell server. Rebuild it and start it again. No need to rebuild the host.
1. Go to http://host:3001/ and see the change.

At this point, everything’s great. The chunks are updated both on the client and the server. This is what we want.

**However**, if we change the remote again, chunks are missing server-side because the flushChunks function returns an empty array.


## Current hacky solution

In the @module-federation/node package, removing the call to `usedChunks.clear()` fixes the issue: https://github.com/module-federation/universe/blob/main/packages/node/src/utils/flush-chunks.js#L49z
