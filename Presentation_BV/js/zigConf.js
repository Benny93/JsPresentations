zig.embed();
            console.log("Browser plugin installed: " + zig.pluginInstalled);
            console.log("Browser plugin version: " + zig.pluginVersion);
            console.log("Zig.js version: " + zig.version);
             console.log("Sensor connected: " + zig.sensorConnected);
            zig.addEventListener('statuschange', function() {
	           console.log("Sensor connected: " + zig.sensorConnected);
            });
            
            // Method 1: specific event listeners
            zig.addEventListener('userfound', function(user) {
                console.log('Found user. ID: ' + user.id);
            });
            zig.addEventListener('userlost', function(user) {
                console.log('Lost user. ID: ' + user.id);
            });
            
            var engager = zig.EngageUsersWithSkeleton(1);
            engager.addEventListener('userengaged', function(user) {
                console.log('User engaged: ' + user.id);
            });
            engager.addEventListener('userdisengaged', function(user) {
                console.log('User disengaged: ' + user.id);
            });
            zig.addListener(engager);
            
            // SwipeDetector
            var swipeDetector = zig.controls.SwipeDetector();
            swipeDetector.addEventListener('swipeup', function(pd) {
                console.log('SwipeDetector: Swipe Up');
                //Reveal.up();
            });
            swipeDetector.addEventListener('swipedown', function(pd) {
                console.log('SwipeDetector: Swipe Down');
                 //Reveal.down();
            });
            swipeDetector.addEventListener('swipeleft', function(pd) {
                console.log('SwipeDetector: Swipe Left');
                 Reveal.prev();
            });
            swipeDetector.addEventListener('swiperight', function(pd) {
                console.log('SwipeDetector: Swipe Right');
               // $(document).trigger({type: 'keydown', keyCode: 37});
                Reveal.next();
            });
            swipeDetector.addEventListener('swipe', function(dir) {
                console.log('SwipeDetector: Swipe direction: ' + dir);
            });
            zig.singleUserSession.addListener(swipeDetector);