// import { iconsImgs } from "../utils/images";
// import { personsImgs } from "../utils/images";
import { logo } from "../assets/images";

export const navigationLinks = [
    { id: 1, title: 'Dashboard', image: logo },
    { id: 2, title: 'Product',  image: logo  },
    { id: 3, title: 'Customers',  image: logo  },
    { id: 4, title: 'Income',  image: logo },
    { id: 5, title: 'Promote',  image: logo  },
    { id: 6, title: 'Help',  image: logo  },
];

export const transactions = [
    {
        id: 11, 
        name: "Sarah Parker",
        // image: personsImgs.person_four,
        date: "23/12/04",
        amount: 22000
    },
    {
        id: 12, 
        name: "Krisitine Carter",
        // image: personsImgs.person_three,
        date: "23/07/21",
        amount: 20000
    },
    {
        id: 13, 
        name: "Irene Doe",
        // image: personsImgs.person_two,
        date: "23/08/25",
        amount: 30000
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 60,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: null
    },
    {
        id: 16,
        month: "Mar",
        value1: 75,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 65,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 70,
        value2: null
    },
    {
        id: 19,
        month: "Jun",
        value1: 40,
        value2: null
    },
    {
        id: 20,
        month: "Jul",
        value1: 70,
        value2: null
    },
    {
        id: 21,
        month: "Aug",
        value1: 80,
        value2: 80
    },
    {
        id: 22,
        month: "Sep",
        value1: 75,
        value2: null
    },
    {
        id: 23,
        month: "Oct",
        value1: 65,
        value2: null
    },
    {
        id: 24,
        month: "Nov",
        value1: 60,
        value2: null
    },
    {
        id: 25,
        month: "Dec",
        value1: 65,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automated",
        amount: 22000
    },
    {
        id: 20, 
        title: "Loan Payment",
        type: "Automated",
        amount: 16000
    },
    {
        id: 21, 
        title: "Foodstuff",
        type: "Automated",
        amount: 20000
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 10000
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 40000
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: 20000
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "23/12/10",
        amount: 5000
    },
    {
        id: 26,
        title: "DSTV",
        due_date: "23/12/22",
        amount: 2000
    }
];

export const savings = [
    {
        id: 27,
        // image: personsImgs.person_one,
        saving_amount: 250000,
        title: "Pay kid bro’s fees",
        date_taken: "23/12/22",
        amount_left: 40000
    }
]