document.addEventListener("DOMContentLoaded", function () {

    const roomTabs = document.querySelectorAll(".room-tab");
    const roomContents = document.querySelectorAll(".room-content");


    roomTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const selectedRoom = this.dataset.room;


            /* Remove selected state from all buttons */

            roomTabs.forEach(function (item) {

                item.classList.remove("selected");

            });


            /* Add selected state to clicked button */

            this.classList.add("selected");


            /* Hide all room sections */

            roomContents.forEach(function (content) {

                content.classList.remove("active");

            });


            /* Show selected room section */

            const selectedContent =
                document.getElementById(selectedRoom);


            if (selectedContent) {

                selectedContent.classList.add("active");

            }

        });

    });

});