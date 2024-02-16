import { Link } from "react-router-dom";

export const text = {
    titles: ["data on your reservation", "Insurance", "Addons", "Contact information", "Driver details", "Additional Driver", "Payment method"],
    extras: {
        "Cobertura SCDW": "SCDW cover",
        "Cobertura vidros e pneus": "Windows and tyres coverage",
        "Condutor adicional": "Additional driver",
        "Cadeira de bébé": "Baby seat",
        "Assento de criança": "Child seat"
    },
    descriptions: {
        manual: "manual",
        automatic: "automatic",
        gasoline: "gasoline",
        hybrid: "hybrid",
        eletric: "eletric",
        diesel: "diesel"
    },
    prices: {
        per: "per",
        day: "day",
        uni: "uni"
    },
    insurance: {
        button: "selected",
        basic: {
            title: "Basic",
            items: ["CDW (Collision Damage Waiver) protection", "Subject to a excess / security deposit"]
        },
        premium: {
            title: "Premium",
            items: ["Premium coverage - SCDW (Super Collision Damage Waiver)", "Possible damages are covered", "No credit card required"]
        },
        disclaimer: "Notes: Price of the insurance are per day. Subject to a excess / security deposit: Basic: 2000€, Standard: 1000€ and Premium: 600€. If the driver is under 25 years old, Premium Insurance is required."
    },
    placeholder: {
        date: ["pickup date", "pickup time", "return date", "return time"],
        pickup_place: {
            label: "pickup place",
            options: ["Airport", "Store"],
            tax: "Outside",
            placeholder: "Please enter other address or hotel name"
        },
        return_place: {
            label: "return place",
            options: ["Airport", "Store"],
            tax: "Outside",
            placeholder: "Please enter other address or hotel name"
        },

        client: {
            name: "Name*",
            cc: "ID/Passport*",
            nif: "Taxpayer Identification Number (TIF)*",
            address: "Address*",
            country: "Country*",
            postal_code: "Postal Code*",
            email: "Email*",
            phone: "Phone number*",
            local_address: "Local address / hotel*",
            flight: "Flight number (if applicable)",
        },
        driver: {
            name: "Name*",
            age: "Age*",
            license: "Driver's License number",
        },
    },
    button: "book",
    notice: "Includes 22% VAT",
    error: "The following errors during the reservation",
    payments: [{
        id: 1,
        name: "Credit card",
        image: "/icon/credit_card.svg"
    },
    {
        id: 2,
        name: "Pay at pickup",
        image: "/icon/money.svg"
    }],
    notices: [
        "50€ mandatory, for cleaning and management of the vehicle.",
        "I confirm the Driver is over 25 years old and have a minimum of 3 years of driving licence.",
        (<span>I Read & Accept the <Link to="/bookingConditions">Booking Conditions</Link> and <Link to="/conditions">Terms and Conditions</Link>.</span>),
    ],
    info: {
        title: "Other information",
        items: [
            "Minimum Booking Period: 4 Days / 3 Nights;",
            "The Delivery Zone is in Santana, with the possibility of delivery at Madeira Airport (costs 70€);",
            "Driver must be over 25 years old and have a minimum of 3 years driving licence."
        ]
    },
    pricesDisclaimer: {
        title: "Seasonal prices",
        paragraph: "Prices may vary based on low and high seasons. Check the month listing below to know which months this applies to.",
        items: [
            "Low Season: January, February, March, April, October, November and December;",
            "High Season: May, June, July, August and September.",
        ]
    }
} 
