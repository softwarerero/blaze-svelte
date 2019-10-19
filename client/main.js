import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import App from '/imports/ui/App.svelte'

import './main.html';

// Hacky timeout to wait for the DOM
Meteor.setTimeout(() => {
  new App({
      target: document.getElementById('svelteRoot'),
      hydrate: true
  })
}, 50)

Template.layout.onRendered(() => {
  })


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

