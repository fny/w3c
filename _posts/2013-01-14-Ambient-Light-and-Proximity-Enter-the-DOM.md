# Ambient Light and Proximity Enter the DOM

Web development has classically been confined to the purview of a limited browser, which proffered document level manipulation and handling user interactions. The W3C has begun to lift this barrier by introducing a series of APIs which allow developers to interact with a device and a variety of peripherals. Two of these specifications, "[Proximity Events][w3c-proximity]" and "[Ambient Light Events][w3c-light]" have entered their [Last Call][LC] stages as drafts and in the coming months will enter the [Candidate Recommendation][CR] stage wherein implementations will begin to appear.

The "[Proximity Events][w3c-proximity]" and "[Ambient Light Events][w3c-light]" specifications define a means to receive events from a proximity sensor and light sensor, respectively, through JavaScript and HTML5's [event handlers][event-handlers].

As currently defined, the "[Proximity Events][w3c-proximity]" specification defines two interfaces the `DeviceProximityEvent`, which provides developers with information about the devices distance form an object, and the `UserProximityEvent`, which provides the developer with browser and platform-specific notification of a nearby object's detection. The `DeviceProximityEvent` exposes three read-only attributes:

 * `min` - the maximum sensing distance in centimeters
 * `max` - the minimum sensing distance in centimeters
 * `value` - the proximity of a nearby object in centimeters

The object is passed to a special callback, defined in the HTML5 specification as an [event handler][event-handlers], which takes an event as its argument.

```
// Event Handler
deviceProximityHandler = function(event) {
  document.writeln('min = ', event.min,
                   'max = ', event.max,
                   'value = ', event.value); // e.g. => min = 0 max = 5 value = 5
  document.write('<br>');
}

// Assigning the Event Handler to a Listener
window.addEventListener('deviceproximity', deviceProximityHandler);
```

The `UserProximityEvent` is a bit less "exciting" and provides access to the boolean attribute `near` for object proximity indication:

```
userProximityHandler = function(event) {
  document.write('near = ', event.near); // e.g. => near = true/false
  document.write('<br>');
}

window.addEventListener('userproximity', userProximityHandler);
```

As currently defined, the "[Ambient Light Events][w3c-light]" specification defines two interfaces as well. The `DeviceLightEvent` provides a `value` attribute with the ambient light level in lux. The `LightLevelEvent` provides  information about the ambient light levels in terms three ranges "dim" (below 50 lux), "normal", and "bright" (above 10000 lux) as defined by the User Agent.

```
deviceLightHandler = function(event) {
  document.write('value = ', event.value); // e.g. => value = 10/100/1000
  document.write('<br>');
}

window.addEventListener('devicelight', deviceLightHandler);
```

Currently, the [`DeviceProximityEvent`][moz-deviceproximity], [`UserProximityEvent`][moz-userproximity], and [`DeviceLightEvent`][moz-devicelight] are available in Firefox Mobile Beta versions 15 and up. Support for ambient light sensors in Firefox Beta for Windows [may be arriving soon as well][moz-windows-light-support]. Remember, that as sample implementations, the features provided are subject to significant change. For example, Mozilla's implementation of [`DeviceLightEvent`](moz-devicelight) provides access to a `min` and `max` which are no longer defined in the specification.

The "[Proximity Events][w3c-proximity]" and "[Ambient Light Events][w3c-light]" are the most mature branches from the now-divided Sensor API Specification that ambitiously sought to define access to temperature, pressure, humidity, and noise as well. The breadth of those aspirations gives developers a glimpse into the tools they will be afforded to interact with a user's environment with tomorrow's DOM. Developers are encouraged to give feedback regarding these APIs especially during the [Last Call][LC]. Join the conversation by subscribing to the [Device APIs Working Group's public mailing list](http://lists.w3.org/Archives/Public/public-device-apis/).

[w3c-light]: http://www.w3.org/TR/2012/WD-ambient-light-20121213/ "W3C: Ambient Light Events Working Draft"
[w3c-devicelight]: http://www.w3.org/TR/2012/WD-ambient-light-20121213/#device-light "W3C: Ambient Light Events Working Draft - DeviceLight"
[w3c-proximity]: http://www.w3.org/TR/2012/WD-proximity-20121206/ "W3C: Proximity Events Working Draft"
[w3c-device-mail]: http://lists.w3.org/Archives/Public/public-device-apis/ "W3C: Public Device APIs Mailing List"
[LC]: http://www.w3.org/2005/10/Process-20051014/tr#last-call "W3C: Process Document - Last Call"
[CR]:http://www.w3.org/2005/10/Process-20051014/tr#RecsCR "W3C Process Document - Candidate Recommendation"

[event-handlers]: http://www.w3.org/TR/2012/CR-html5-20121217/webappapis.html#event-handlers "W3C: HTML5 Specification - Event Handlers"
[moz-deviceproximity]: https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/deviceproximity "MDN: Mozilla Event Reference - DeviceProximityEvent"
[moz-userproximity]: https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/userproximity "MDN: Mozilla Event Reference - UserProximityEvent"
[moz-devicelight]: https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/devicelight "MDN: Mozilla Event Reference - DeviceLightEvent"
[moz-windows-light-support]: https://bugzilla.mozilla.org/show_bug.cgi?id=754199
