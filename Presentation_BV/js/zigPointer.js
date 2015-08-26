// Create cursor and cursor dom element
            var c = zig.controls.Cursor();
            var ce = document.createElement('div');
            ce.id = 'mycursor';
            document.body.appendChild(ce);

            // 1. show/hide cursor on session start/end
            zig.singleUserSession.addEventListener('sessionstart', function(focusPosition) {
                ce.style.display = 'block';
            });
            zig.singleUserSession.addEventListener('sessionend', function() {
                ce.style.display = 'none';
            });

            // 2. move the cursor element on cursor move
            c.addEventListener('move', function(cursor) {
                ce.style.left = (c.x * window.innerWidth - (ce.offsetWidth / 2)) + "px";
                ce.style.top = (c.y * window.innerHeight - (ce.offsetHeight / 2)) + "px";
            });

            // 3. Add/remove 'pushed' class on cursor push/release
            /*c.addEventListener('push', function(c) {
                ce.classList.add('pushed');
            });
            c.addEventListener('release', function(c) {
                ce.classList.remove('pushed');
            });*/

            // 4. Simulate mouse click on our virtual cursor
            /*c.addEventListener('click', function(c) {
                var xpos = c.x * window.innerWidth;
                var ypos = c.y * window.innerHeight;
                var evt = document.createEvent("MouseEvents");
                evt.initMouseEvent("click", true, true, window, 1, xpos, ypos, xpos, ypos, false, false, false, false, 0, null);
                window.dispatchEvent(evt);
            });*/

            // Add cursor to our single user UI session
            zig.singleUserSession.addListener(c);