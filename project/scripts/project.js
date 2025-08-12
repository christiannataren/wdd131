

function setBurguer() {
    let burguer = document.querySelector(".burguer-button");
    burguer.addEventListener("click", function () {
        document.querySelector("nav").classList.toggle("show");
        // document.querySelector("h1").classList.toggle("hide");
    })

}

function storyHtml(title, text, image) {
    return `
        <div class="story">
        <h3>${title}</h3>
        <img src="${image.url}" alt="${image.alt} " loading="lazy"/>
        <p>${text}</p>
        </div>

    `;
}
function fillStories() {
    let groups = [
        {
            name: "Phishing Emails", stories:
                [
                    { title: "The Bank Identity Verification Scam.", image: { url: "images/fake-email.jpg", alt: "identity verification scam" }, text: "An email purporting to be from Emma's bank informed her that her account had been locked because of \"suspicious activity.\"  One of the links in the email was to \"verify her identity.\"  She clicked it mindlessly and typed in her login information.  Hours later, her account was completely depleted.  She later found that the link took her to a phony website and that the email address was slightly misspelled." },
                    { title: "The Package Redelivery Smishing Scam. ", image: { url: "images/text-scam.jpg", alt: "delivery scam" }, text: "David received a text message informing him that he needed to confirm his address before his package could be delivered.  He was asked to enter his credit card information for a \"small redelivery fee\" after clicking on what appeared to be a legitimate link.  Charges totaling hundreds of dollars showed up on his account a week later." },
                ]
        },
        {
            name: "Fake Online Stores", stories:
                [
                    { title: "The Phantom Store Scam.", image: { url: "images/fake-store.jpg", alt: "fake store scam" }, text: "Sophia came across a social media advertisement for an expensive smartwatch that was 80% off. She placed her order because the website appeared to be professional. The seller stopped answering her emails, and the watch never came. After a few weeks, she found out that the website had vanished." },
                    { title: "The Counterfeit Goods Scam", image: { url: "images/fake-sneakers.jpg", alt: "counterfeit scam" }, text: "Jason purchased sneakers from an internet retailer that advertised \"limited edition\" styles. The shoes were cheap knockoffs when the package arrived. His payment method did not provide a refund option, and the return address was fraudulent." },
                ]
        },
        {
            name: "Romance Scams", stories:
                [
                    { title: "The Emergency Trip.", image: { url: "images/emergency-trip.jpg", alt: "emercency trip scam" }, text: "\"Elena\" and Carlos met on a dating website. Despite living in a different province, she expressed her desire to see him. She told Carlos that her bank account was frozen after claiming to have booked a flight after weeks of conversation. According to her, she only required $1,200 for \"last-minute travel expenses,\" and she would reimburse him when she got there. The dating profile vanished, and Carlos sent the money, but she never appeared." },
                    { title: "The Long-Distance Love.", image: { url: "images/romance-scam.jpg", alt: "romance scam" }, text: "Through a language-learning app, Sophie got to know \"Daniel.\" He said he was an engineer on a major project abroad. For months, they spoke daily, exchanging personal anecdotes and even arranging to meet in person in the future. In order to complete his contract and \"finally come see her,\" Daniel informed Sophie one day that his work equipment had been damaged and that he urgently needed $3,000 to replace it. After Sophie wired the money, Daniel disappeared, blocking her on all platforms." },
                ]
        },
        {
            name: "Tech Support Scams", stories:
                [
                    { title: "The Fake Virus Alert & Remote Access Scam.", image: { url: "images/techSupportScan.jpg", alt: "remote access scam" }, text: "Oliver's computer abruptly displayed a pop-up stating that a virus had infected it and that he needed to contact \"Microsoft Support.\" The caller requested \"a small service fee\" and remote access. His files were held for ransom and his computer was locked after he paid." },
                    { title: "The ISP Impersonation Scam.", image: { url: "images/impertionation.jpg", alt: "isp impersonation scam" }, text: "Someone posing as Hannah's internet provider called her. They claimed to have found \"dangerous activity\" on her network and required the password to her router. Her online accounts and home Wi-Fi were compromised a few hours later." },
                ]
        },
        {
            name: "Investment Fraud", stories:
                [
                    { title: "The Guaranteed Returns Crypto Scam.", image: { url: "images/crypto-scam.jpg", alt: "crypto scam" }, text: "Mark saw a YouTube ad promoting a cryptocurrency that promised “guaranteed 300% returns in one week.” He invested $1,000. The website showed his money growing quickly, but when he tried to withdraw, the page stopped loading and the company vanished." },
                    { title: " The \"Pump and Dump\" Scheme. ", image: { url: "images/pump-and-dump-scam.jpg", alt: "isp impersonation scam" }, text: "Sofia became a member of an online forum where \"investors\" exchanged advice regarding a popular new stock. The group as a whole claimed to be making enormous profits. The stock value crashed after she invested her savings; the group was a well-planned \"pump and dump\" scam." },
                ]
        },

    ];
    let sections = groups.map(group => {
        return `<section><h2>${group.name}</h2>${group.stories.map(story => storyHtml(story.title, story.text, story.image)).join("")}</section>`;
    })

    addMain(sections);




}
function addMain(sections) {
    let main = document.querySelector("main");
    main.innerHTML = sections.join(" ");
}


function fillSites() {
    let sites = [
        {
            name: "Identity Theft Resource Center (ITRC)",
            url: "https://www.idtheftcenter.org/",
            logo: "https://www.idtheftcenter.org/wp-content/uploads/2024/11/ITRC-logo-color-final-3.svg",
            description: "The Identity Theft Resource Center (ITRC) helps people who have experienced identity theft by providing free, confidential support and guidance to recover their identity. It also offers educational resources to help prevent identity theft and protect personal information."
        },
        {
            name: "Federal Trade Commission (FTC) - Report Fraud (US)",
            url: "https://reportfraud.ftc.gov/",
            logo: "https://reportfraud.ftc.gov/assets/images/RF-Logo-Seal-NEW-01.svg",
            description: "The goal of the U.S. Federal Trade Commission's (FTC) official website, ReportFraud.ftc.gov, is to gather information about fraud, scams, and other dishonest business practices. Customers use it as a central platform to report a range of problems, such as deceptive advertising, identity theft, and unsolicited calls. People can submit reports safely and swiftly thanks to the site's user-friendly design."
        },
        {
            name: "BBB Scam Tracker",
            url: "https://www.bbb.org/scamtracker",
            logo: "https://m.bbb.org/terminuscontent/scamtracker/ScamTrackerLogo.svg?tx=w_640",
            description: "BBB Scam Tracker is a free tool anyone can use to report suspected scams. Your reports warn others so they can avoid similar cons."
        },
        {
            name: "Internet Crime Complaint Center (IC3)",
            url: "https://www.ic3.gov/",
            logo: "https://www.ic3.gov/img/ic3_logo.webp",
            description: "The Internet Crime Complaint Center (IC3) is the central hub for reporting cyber-enabled crime. It is run by the FBI, the lead federal agency for investigating crime."
        },
        {
            name: "The Consumer Financial Protection Bureau (CFPB)'s Consumer Tools",
            url: "https://www.consumerfinance.gov/consumer-tools/",
            logo: "https://www.consumerfinance.gov/static/img/logo_161x34@2x.fff273f43f0a.png",
            description: "A full range of free resources are available on the Consumer Financial Protection Bureau's (CFPB) Consumer Tools page to assist people in successfully navigating and managing their personal finances. These resources offer objective, approachable advice whether you're preparing for important financial milestones or trying to address particular financial problems."
        },

    ];


    addMain(sites.map(site => {
        return `<section><h2>${site.name}</h2>
        <div class="story"><a href="${site.url}" target="blank"><img src="${site.logo}" alt="${site.name} logo" /></a>
        <p>
            ${site.description}
            
        </p>
        <a href="${site.url}" target="blank">Visit</a>
        </div>
        </section>`;
    }));
}
function fillHome() {
    let sections = [
        { title: "Stay Safe from Internet Scams", text: 'Thousands of people are scammed online every day.  Criminals deceive you into parting with money or personal information by sending you phony emails, messages, and websites.Pretending to be from your bank, offering fictitious prizes, or fabricating urgent issues that only they can "fix" are common strategies.', tips: [] },
        { title: "Phishing Emails", text: 'Scammers ask you to click links or provide personal information in phony messages that appear to be from reputable businesses.', tips: ['Always check the sender’s full email address, not just the display name.', 'Hover over links to see the actual URL before clicking.', 'Look for spelling mistakes and unusual requests — they’re red flags.'] },
        { title: "Fake Online Stores", text: 'Fraudulent websites advertise unbeatable prices, take your money, and never deliver.', tips: ['Check for HTTPS (padlock icon) in the browser before making payments.', 'Search for independent reviews — not just testimonials on the site.', 'Avoid stores that only accept gift cards, wire transfers, or cryptocurrency.'] },
        { title: "Romance Scams", text: 'To get your trust, criminals create fictitious online relationships before requesting gifts or cash.', tips: ['Be cautious if someone professes love quickly.', 'Avoid sending personal photos that could be misused.', 'Refuse requests for money or financial help, no matter the reason.'] },
        { title: "Tech Support Scams", text: 'Scammers claim your device is infected while posing as representatives of Apple, Microsoft, or other tech companies.', tips: ['Hang up if you get an unsolicited tech support call.', 'Never give strangers remote access to your computer.', 'Contact your device’s official support directly if you\'re unsure.'] },
        { title: "Investment Fraud", text: 'Scammers promise high returns with little or no risk.', tips: ['Be wary of “too good to be true” offers.', 'Research the company’s registration and license with regulators.', 'Avoid investing under pressure or with incomplete information.'] },
        { title: "Scam stories (Examples)", text: 'To steal from you, scammers employ a variety of tactics. Knowledge is essential to avoiding them. To avoid scams, look for several examples and get ready.', tips: ['<a href="scam-stories.html">See More</a>'] },
    ]


    let sectionsText = sections.map(section => {
        if (section.tips.length > 0) {
            return `<section ><h2>${section.title}</h2><p>${section.text}</p><h3>Tips:</h3> <ul>${section.tips.map(tip => { return `<li>${tip}</li>` }).join(" ")} </ul></section>`
        } else {
            return `<div class="hero" ><section ><h2>${section.title}</h2><p>${section.text}</p></section></div>`
        }

    })
    addMain(sectionsText);
}

function fillSend() {
    let contact = document.querySelector("#contacted");
    let times = parseInt(window.localStorage.getItem("sends"));
    if (isNaN(times)) {
        times = 1;
    } else {
        times = times + 1;
    }
    window.localStorage.setItem("sends", times)

    contact.textContent = `You have contacted us ${times} times.`
}
function fillSections() {
    let pathname = window.location.pathname;
    if (pathname.includes("scam-stories.html")) {
        fillStories();
    }
    else if (pathname.includes("how-to-avoid-intenet-scams.html")) {
        fillHome();
    }
    else if (pathname.includes("helpful-sites.html")) {
        fillSites();
    }
    else if (pathname.includes("send.html")) {
        fillSend();
    }

}




setBurguer();
fillSections();