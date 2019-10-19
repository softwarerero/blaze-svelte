<script>
    // this import errors: read property 'meteorInstall' of undefined
    // so router not yet working
    // import { Router, Link, Route } from 'svelte-routing'
    import Nav from './Nav.svelte'
    import Hello from './Hello.svelte'

    $: showMe = window.location.href.endsWith('/svelte')
    $: {
        console.log(showMe)
        console.log('href', window.location.href)
    }
    const locationChanged = () => {

    }
</script>

<!-- 'location' is not a valid binding on <svelte:window></svelte:window> -->
<!-- <svelte:window bind:location={locationChanged}/> -->
{showMe}
<Nav/>
<br/>
<Hello thing="App in Svelte in Meteor"/>

<!-- <Router {url}>
        <Hello/>
    <Route path="/svelte">
        <Hello/>
    </Route>
</Router> -->
