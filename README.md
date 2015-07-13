# D3-Auto-Shanghai-2015
All html single-pages loaded dynamically into [Swiper](http://www.idangero.us/swiper/) slides.

### Swiper
Swiper - is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.

The usage of Swiper is easy and simple, just follow the pattern below:
```
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <link rel="stylesheet" href="path/to/swiper.min.css">
</head>
<body>
    <!-- Slider main container -->
    <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          ...
      </div>
    </div>
    <script src="path/to/swiper.min.js"></script>
    <script>        
      var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        width: 320px,
        height: 480px,
        onSlideChangeEnd: function (swiper) {
          ...
        }
      });    
    </script>
</body>
</html>
```
The last \<script\> in the example above is for initializing Swiper, including setting the ```width``` and ```height``` of the container. In our case, we set ```width``` and ```height``` dynamically according to the ```screen``` size.
Some useful properties and callback functions:

Name | Definition
-----|-----------
onSlideChangeStart(swiper) | Callback function, will be executed in the beginning of animation to other slide (next or previous). Receives swiper instance as an argument.
onSlideChangeEnd(swiper)   | Callback function, will be executed after animation to other slide (next or previous). Receives slider instance as an argument.
mySwiper.width             | Width of container
mySwiper.height            | Height of container
mySwiper.activeIndex       | Index number of currently active slide
mySwiper.previousIndex     | Index number of previously active slide

For all other methods and properties, please refer to [swiper api](http://www.idangero.us/swiper/api/).
