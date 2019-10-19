Small Meteor application to research how Blaze and Svelte can coexist.

Current situation:

Blaze templates are served by FlowRouter and Svelte templates without a router as the svelte-routing import errors. Goal: find a solution that works on client and server with whatever router.

Hello.svelte renders and can receive an export parameter from App.svelte, but it needs a full page reload. This is not sustainably cool.
