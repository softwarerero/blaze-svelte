import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

FlowRouter.route('/', { action: () => BlazeLayout.render('layout', {nav: 'menu', content: 'hello' }) })

// FlowRouter.route('*', { action: () => console.error('404') })

