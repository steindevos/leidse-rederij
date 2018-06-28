   $(function() {
            var body = $('.title');
            var backgrounds = new Array(
                'url(floating-dinner.jpg)',
                'url(8308.jpeg)',
                'url(4025.jpeg)'
            );
            var current = 0;

            function nextBackground() {
                body.css(
                    'background-image',
                    backgrounds[current = ++current % backgrounds.length]
                );

                setTimeout(nextBackground, 10000);
            }
            setTimeout(nextBackground, 10000);
            body.css('background-image', backgrounds[0]);
        });