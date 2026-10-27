// =========================================
// ROOM TYPE SELECTION
// =========================================

const roomOptions = document.querySelectorAll(".room-option");
const roomContents = document.querySelectorAll(".room-content");


// =========================================
// ROOM IMAGE DATA
// =========================================

const roomData = {

    deluxe: {

    folder: "rooms/deluxe",

    images: [
        "deluxelow.jpg",
        "deluxmid.jpg",
        "deluxhigh.jpg",
        "deluxe-room.jpg"
    ],

    descriptions: [
        "A comfortable and stylish Deluxe Room designed for couples and solo travelers.",

        "Enjoy a relaxing Deluxe Room with elegant furnishings and modern facilities.",

        "Experience a spacious and comfortable room with a beautiful interior.",

        "A premium Deluxe Room designed for guests looking for comfort and convenience."
    ]

},


    superior: {

        folder: "rooms/superior",
 
        images: [
            "superiorlow.jpg",
            "superiormid.jpg",
            "superiormid1.jpg",
            "superiorhigh.jpg"
        ],

        descriptions: [
            "Enjoy additional space and upgraded amenities for a more comfortable and peaceful experience.",

            "A beautifully designed sleeping area with modern furniture and additional space.",

            "A relaxing Superior Room with premium facilities suitable for longer stays."
        ]

    },


    executive: {

        folder: "rooms/executive",

        images: [
            "executivelow.webp",
            "executivelow1.webp",
            "executivemid.webp",
            "executivemid1.webp",
            "executivehigh.jpg",
            "executivehigh1.jpg",
            "executivehigh2.jpg"
        ],

        descriptions: [
            "A premium room offering a spacious environment suitable for business travelers and couples.",

            "A comfortable work area combined with a relaxing bedroom for productive stays.",

            "Enjoy premium furnishings and additional space designed for executive guests."
        ]

    },


    family: {

        folder: "rooms/family",

        images: [
            "familymid.jpg",
            "familymid1.jpg",
            "familyhigh.avif"
        ],

        descriptions: [
            "A spacious suite designed for families and small groups who want comfort and convenience.",

            "A welcoming living area where families can relax and spend time together.",

            "A comfortable Family Suite with enough space for the whole family."
        ]

    },


    honeymoon: {

        folder: "rooms/honeymoon",

        images: [
            "honeymoonlow.jpg",
            "honeymoonlow1.jpg",
            "honeymoonmid.jpg",
            "honeymoonmid1.jpg",
            "honeymoonhigh.jpg"
        ],

        descriptions: [
            "A romantic and elegant suite created for couples celebrating special moments together.",

            "Enjoy a peaceful and intimate bedroom designed for a romantic getaway.",

            "A beautiful Honeymoon Suite featuring luxurious details and a relaxing atmosphere."
        ]

    },


    presidential: {

        folder: "rooms/presidential",

        images: [
            "Presidentiallow.jpg",
            "Presidentiallow1.jpg",
            "Presidentialmid.jpg",
            "Presidentialmid1.jpg",
            "Presidentialhigh.jpg",
            "Presidentialhigh1.jpg"

        ],

        descriptions: [
            "Our most luxurious accommodation featuring premium facilities, spacious living areas, and exceptional comfort.",

            "Relax in an elegant living space designed for guests who prefer exceptional comfort.",

            "Experience a luxurious private suite with premium furnishings and amenities."
        ]

    }

};


// =========================================
// ROOM INFORMATION
// =========================================

const roomInformation = {

    deluxe: {
        title: "Deluxe Room",
        guests: "2",
        price: "₱3,200",
        amenities: "Free Wi-Fi, Air Conditioning, TV, Mini Refrigerator"
    },

    superior: {
        title: "Superior Room",
        guests: "2",
        price: "₱4,100",
        amenities: "Free Wi-Fi, Smart TV, Coffee Maker, Work Desk"
    },

    executive: {
        title: "Executive Room",
        guests: "2",
        price: "₱5,300",
        amenities: "High-Speed Wi-Fi, Smart TV, Mini Bar, Work Desk"
    },

    family: {
        title: "Family Suite",
        guests: "4",
        price: "₱6,800",
        amenities: "Two Beds, Free Wi-Fi, TV, Living Area, Refrigerator"
    },

    honeymoon: {
        title: "Honeymoon Suite",
        guests: "2",
        price: "₱8,900",
        amenities: "King Bed, Bathtub, Balcony, Mini Bar, Room Service"
    },

    presidential: {
        title: "Presidential Suite",
        guests: "4",
        price: "₱12,500",
        amenities: "King Bed, Living Room, Private Balcony, Jacuzzi, Mini Bar, Premium Room Service"
    }

};


// =========================================
// CURRENT ROOM
// =========================================

let currentRoom = "deluxe";

let currentImage = 0;


// =========================================
// DISPLAY ROOM IMAGE
// =========================================

function displayRoomImage() {

    // Find the room that is currently selected
    const activeRoom =
        document.querySelector(".room-content.active");


    if (!activeRoom) {
        return;
    }


    // Find the image only inside the active room
    const image =
        activeRoom.querySelector(".roomImage");


    if (!image) {
        return;
    }


    // Get image data for selected room
    const data =
        roomData[currentRoom];


    // Change the image
    image.src =
        "/static/images/" +
        data.folder +
        "/" +
        data.images[currentImage];


    image.alt =
        currentRoom +
        " room image " +
        (currentImage + 1);


    // Get number buttons only from active room
    const numberButtons =
        activeRoom.querySelectorAll(".image-number");


    // Update active number
    numberButtons.forEach(function(button, index) {

        button.classList.remove("active");


        if (index === currentImage) {

            button.classList.add("active");

        }

    });

}
// =========================================
// NEXT / PREVIOUS IMAGE
// =========================================

function changeRoomImage(direction) {

    const data =
        roomData[currentRoom];


    currentImage += direction;


    // If going before Image 1,
    // go to the last image

    if (currentImage < 0) {

        currentImage =
            data.images.length - 1;

    }


    // If going after the last image,
    // return to Image 1

    if (currentImage >= data.images.length) {

        currentImage = 0;

    }


    displayRoomImage();

}


// =========================================
// SELECT IMAGE NUMBER
// =========================================

function showRoomImage(index) {

    currentImage = index;

    displayRoomImage();

}


// =========================================
// ROOM TYPE BUTTONS
// =========================================

roomOptions.forEach(function(option) {

    option.addEventListener("click", function() {


        // Remove active state
        // from all room buttons

        roomOptions.forEach(function(button) {

            button.classList.remove("active");

        });


        // Activate selected room

        option.classList.add("active");


        // Get selected room

        const selectedRoom =
            option.dataset.room;


        // Hide all room information

        roomContents.forEach(function(room) {

            room.classList.remove("active");

        });


        // Show selected room

        const selectedContent =
            document.getElementById(selectedRoom);


        if (selectedContent) {

            selectedContent.classList.add("active");

        }


        // Change current room

        currentRoom =
            selectedRoom;


        // Start with first image

        currentImage = 0;


        // Display selected room

        displayRoomImage();

    });

});


// =========================================
// INITIAL ROOM DISPLAY
// =========================================

displayRoomImage();

// =========================================
// GALLERY PAGE
// =========================================

const galleryImage = document.getElementById("galleryImage");
const previousImage = document.getElementById("previousImage");
const nextImage = document.getElementById("nextImage");

const galleryTitle = document.getElementById("galleryTitle");
const galleryDescription = document.getElementById("galleryDescription");

const galleryCounter = document.getElementById("galleryCounter");

const galleryCategories =
    document.querySelectorAll(".gallery-category");

const gallerySubcategories =
    document.querySelectorAll(".gallery-subcategory");


// =========================================
// STOP IF THIS IS NOT THE GALLERY PAGE
// =========================================

if (galleryImage) {


    // =========================================
    // GALLERY DATA
    // =========================================

    const galleryData = {

        hotel: {

            images: [
                "hotel/GILLE.jpg"
            ],

            titles: [
                "GILLE Grand Azure Hotel"
            ],

            descriptions: [
                "A modern coastal hotel designed for comfort, relaxation, and unforgettable stays."
            ]

        },


        rooms: {

            images: [
                "rooms/bathroom.jpg",
                "rooms/bathroom1.jpg",
                "rooms/bathroom2.jpg",
                "rooms/comfortarea.jpg",
                "rooms/comfortarea1.jpg"
            ],

            titles: [
                "Modern Hotel Bathroom",
                "Elegant Bathroom Interior",
                "Comfortable Guest Bathroom",
                "Guest Comfort Area",
                "Relaxing Comfort Area"
            ],

            descriptions: [
                "A clean and modern bathroom designed for a comfortable stay.",
                "A bright and elegant bathroom with modern facilities.",
                "A practical and comfortable bathroom for hotel guests.",
                "A welcoming area where guests can relax during their stay.",
                "A comfortable space designed for relaxation and convenience."
            ]

        },


        dining: {

            images: [
                "dining/restaurant.jpg",
                "dining/restaurant1.jpg"
            ],

            titles: [
                "GILLE Hotel Restaurant",
                "Coastal Dining Area"
            ],

            descriptions: [
                "Enjoy a comfortable dining experience with a relaxed coastal atmosphere.",
                "A welcoming dining space where guests can enjoy meals and conversation."
            ]

        },


        amenities: {

            images: [
                "ameneties/swimmingpool.jpg",
                "ameneties/gym.jpg",
                "ameneties/massage.jpg"
            ],

            titles: [
                "Swimming Pool",
                "Fitness Center",
                "Spa & Massage"
            ],

            descriptions: [
                "Relax beside our refreshing swimming pool and enjoy a peaceful atmosphere.",
                "Stay active during your stay with our modern fitness center.",
                "Unwind with a relaxing massage in our peaceful spa area."
            ]

        }

    };


    // =========================================
    // SUBCATEGORY DATA
    // =========================================

    const subcategoryData = {

        "hotel-exterior": {
            category: "hotel",
            image: 0
        },


        "bathrooms": {
            category: "rooms",
            image: 0
        },


        "comfort-areas": {
            category: "rooms",
            image: 3
        },


        "restaurant": {
            category: "dining",
            image: 0
        },


        "dining-area": {
            category: "dining",
            image: 1
        },


        "pool": {
            category: "amenities",
            image: 0
        },


        "gym": {
            category: "amenities",
            image: 1
        },


        "spa": {
            category: "amenities",
            image: 2
        }

    };


    // =========================================
    // CURRENT GALLERY
    // =========================================

    let currentGalleryCategory = "hotel";

    let currentGalleryImage = 0;


    // =========================================
    // DISPLAY IMAGE
    // =========================================

    function displayGalleryImage() {

        const data =
            galleryData[currentGalleryCategory];


        if (!data) {

            return;

        }


        // Change image

        galleryImage.src =
            "/static/images/gallery/" +
            data.images[currentGalleryImage];


        // Change title

        galleryTitle.textContent =
            data.titles[currentGalleryImage];


        // Change description

        galleryDescription.textContent =
            data.descriptions[currentGalleryImage];


        // Create image indicators

        galleryCounter.innerHTML = "";


        data.images.forEach(function(image, index) {

            const button =
                document.createElement("button");


            button.classList.add("gallery-number");


            button.setAttribute(
                "aria-label",
                "View image " + (index + 1)
            );


            if (index === currentGalleryImage) {

                button.classList.add("active");

            }


            button.addEventListener("click", function() {

                currentGalleryImage = index;

                displayGalleryImage();

            });


            galleryCounter.appendChild(button);

        });

    }


    // =========================================
    // NEXT IMAGE
    // =========================================

    nextImage.addEventListener("click", function() {

        const data =
            galleryData[currentGalleryCategory];


        currentGalleryImage++;


        if (currentGalleryImage >= data.images.length) {

            currentGalleryImage = 0;

        }


        displayGalleryImage();

    });


    // =========================================
    // PREVIOUS IMAGE
    // =========================================

    previousImage.addEventListener("click", function() {

        const data =
            galleryData[currentGalleryCategory];


        currentGalleryImage--;


        if (currentGalleryImage < 0) {

            currentGalleryImage =
                data.images.length - 1;

        }


        displayGalleryImage();

    });


    // =========================================
    // MAIN CATEGORY BUTTONS
    // =========================================

    galleryCategories.forEach(function(button) {

        button.addEventListener("click", function() {


            // Remove active from all categories

            galleryCategories.forEach(function(category) {

                category.classList.remove("active");

            });


            // Activate selected category

            button.classList.add("active");


            // Get category

            const selectedCategory =
                button.dataset.category;


            // Change category

            currentGalleryCategory =
                selectedCategory;


            // Start at first image

            currentGalleryImage = 0;


            displayGalleryImage();

        });

    });


    // =========================================
    // SUBCATEGORY BUTTONS
    // =========================================

    gallerySubcategories.forEach(function(button) {

        button.addEventListener("click", function() {


            const selectedSubcategory =
                button.dataset.category;


            const selectedData =
                subcategoryData[selectedSubcategory];


            if (!selectedData) {

                return;

            }


            // Change category

            currentGalleryCategory =
                selectedData.category;


            // Change image

            currentGalleryImage =
                selectedData.image;


            // Update main category button

            galleryCategories.forEach(function(category) {

                category.classList.remove("active");


                if (
                    category.dataset.category ===
                    selectedData.category
                ) {

                    category.classList.add("active");

                }

            });


            displayGalleryImage();

        });

    });


    // =========================================
    // INITIAL IMAGE
    // =========================================

    displayGalleryImage();

}

// =========================================================
// BOOKING ROOM SELECTION
// =========================================================

const roomSelectButtons = document.querySelectorAll(".booking-room-select");

roomSelectButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Get all room cards
        const roomCards = document.querySelectorAll(".booking-room-card");

        // Remove selected state from every room
        roomCards.forEach(card => {
            card.classList.remove("selected");
        });

        // Select the card that contains the clicked button
        const selectedCard = this.closest(".booking-room-card");

        selectedCard.classList.add("selected");

        // Get room information
        const roomName = this.dataset.room;
        const roomPrice = this.dataset.price;

        console.log("Selected Room:", roomName);
        console.log("Price:", roomPrice);
    });

});