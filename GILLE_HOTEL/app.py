from flask import Flask, render_template

app = Flask(__name__)


# Home Page
@app.route("/")
def home():
    return render_template("home.html")


# Rooms Page
@app.route("/rooms")
def rooms():
    return render_template("rooms.html")


# Gallery Page
@app.route("/gallery")
def gallery():
    return render_template("gallery.html")


# About Page
@app.route("/about")
def about():
    return render_template("about.html")


# Contact Page
@app.route("/contact")
def contact():
    return render_template("contact.html")


# Booking Page
@app.route("/booking")
def booking():
    return render_template("booking.html")

# Room Page
@app.route("/rooms/deluxe")
def deluxe():
    return render_template("rooms/deluxe.html")


@app.route("/rooms/superior")
def superior():
    return render_template("rooms/superior.html")


@app.route("/rooms/executive")
def executive():
    return render_template("rooms/executive.html")


@app.route("/rooms/family")
def family():
    return render_template("rooms/family.html")


@app.route("/rooms/honeymoon")
def honeymoon():
    return render_template("rooms/honeymoon.html")


@app.route("/rooms/presidential")
def presidential():
    return render_template("rooms/presidential.html")

# Run the Website
if __name__ == "__main__":
    app.run(debug=True)