const quotes = [
    "Taste the World at Your Doorstep.",
    "Crave-It and We'll Brave It to Deliver It.",
    "Satisfy Your Hunger Pangs, ASAP.",
    "From Our Kitchen to Your Couch.",
    "Order Up, Chow Down!",
    "Deliciousness Delivered Daily.",
    "Feast Your Eyes, Then Your Stomach.",
    "Your Couch, Your Menu, Your Way.",
    "No Need to Get Up, We'll Fill Your Cup!",
    "We Bring Flavour to Your Door, Not Bore!",
    "Food to Suit Your Mood, Delivered in a Hurry.",
    "The Fast Lane to Flavour.",
    "Delivering right down to flavour town.",
    "Delight in Every Bite, Right at Your Doorstep.",
    "Hungry for a Change? We Deliver.",
    "Deliciousness in Every Byte.",
    "From Our Kitchen with Love, to Your Table Above.",
    "Where Cravings Meet Convenience.",
    "Make Your Home a Gourmet Haven.",
    "Our Service is a Treat for Your Palate.",
    "Door-to-Door Delights, Just a Click Away."
];

const quoteElement = document.querySelector(".quote");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteElement.textContent = randomQuote;
