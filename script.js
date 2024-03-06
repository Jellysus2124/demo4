document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("homeButton").addEventListener("click", function () {
    showSection("homeSection");
    setActiveButton("homeButton");
  });

  document
    .getElementById("membersButton")
    .addEventListener("click", function () {
      showSection("membersSection");
      setActiveButton("membersButton");
    });

  document
    .getElementById("happyDayButton")
    .addEventListener("click", function () {
      showSection("happyDaySection");
      setActiveButton("happyDayButton");
    });

  const rectangle = document.getElementById("rectangle");
  const hiddenContent = document.getElementById("hiddenContent");

  rectangle.addEventListener("click", function () {
    if (hiddenContent.style.display === "block") {
      hiddenContent.style.display = "none";
    } else {
      hiddenContent.style.display = "block";
    }
  });

  hiddenContent.addEventListener("click", function () {
    hiddenContent.style.display = "none";
  });

  rectangle.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  hiddenContent.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.remove("show");
  });
  document.getElementById(sectionId).classList.add("show");
}

function setActiveButton(buttonId) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  document.getElementById(buttonId).classList.add("active");
}
document.addEventListener("DOMContentLoaded", function () {
  // Initially hide the hidden content
  document.getElementById("hiddenContent").style.display = "none";

  // Add event listener for image click
  document.getElementById("image").addEventListener("click", function () {
    var hiddenContent = document.getElementById("hiddenContent");
    if (hiddenContent.style.display === "block") {
      hiddenContent.style.display = "none";
    } else {
      hiddenContent.style.display = "block";
    }
  });

  // Add event listeners for button clicks
  document.getElementById("homeButton").addEventListener("click", function () {
    showSection("homeSection");
    setActiveButton("homeButton");
  });

  document
    .getElementById("membersButton")
    .addEventListener("click", function () {
      showSection("membersSection");
      setActiveButton("membersButton");
    });

  document
    .getElementById("happyDayButton")
    .addEventListener("click", function () {
      showSection("happyDaySection");
      setActiveButton("happyDayButton");
    });
});

// Function to show the selected section
function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.remove("show");
  });
  document.getElementById(sectionId).classList.add("show");
}

// Function to set the active button
function setActiveButton(buttonId) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  document.getElementById(buttonId).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const membersButton = document.getElementById("membersButton");
  const membersSection = document.getElementById("membersSection");
  let openedBoxes = []; // Track the currently opened boxes

  membersButton.addEventListener("click", function () {
    // Clear any existing content in the "Members" section
    membersSection.innerHTML = "";

    // Array of member data
    const membersData = [
      {
        name: "Nguyễn Mai Anh",
        image: "url(manh.PNG)",
        info: "A friendly bro and yet smart as fuck",
      },
      {
        name: "Nguyễn Ngọc Anh",
        image: "url(girlie.png)",
        info: "Bro is so skillful at many things. Ya smart and nice too",
      },
      {
        name: "Nguyễn Phương Anh",
        image: "url(phganh.jpg)",
        info: "I dont know much about ya but you're kinda nice ",
      },
      {
        name: "Trần Bảo Châu",
        image: "url(baochau.jpg)",
        info: "I dont know much about ya too lol. But you still nice and good",
      },
      {
        name: "Nguyễn Hà Chi",
        image: "url(haxi.jpg)",
        info: "I dont know much about you but you seem active",
      },
      {
        name: "Phạm Hoàng Khánh Chi",
        image: "url(khonchi.JPG)",
        info: "2 words: roblox kid. Get better aim soon",
      },
      {
        name: "Trần Quỳnh Chi",
        image: "url(chonli.PNG)",
        info: "Should call you dah monitor of the semester",
      },
      {
        name: "Dương Ngọc Diệp",
        image: "url(girlie.png)",
        info: "Good luck selling dog meat",
      },
      {
        name: "Lê Thùy Dương",
        image: "url(thuydg.JPG)",
        info: "Nice ideas and random skills",
      },
      {
        name: "Phan Ngọc Khánh",
        image: "url(girlie.png)",
        info: "Bro should get better studying i guess",
      },
      {
        name: "Vũ Hương Lan",
        image: "url(girlie.png)",
        info: "I dont know muchh bout ya but you seem nice and friendly",
      },
      {
        name: "Lê Phương Linh",
        image: "url(lelinh.jpg)",
        info: "Bro swears much as fuck. Still a nice and kind bro",
      },
      {
        name: "Lưu Thùy Linh",
        image: "url(luulinh.jpg)",
        info: "Would call you a Lỏd person",
      },
      {
        name: "Nguyễn Giang Linh",
        image: "url(gianglinh.jpg)",
        info: "I dont know much about Parky đần but ya seem nice and friendly",
      },
      {
        name: "Nguyễn Thị Thùy Linh",
        image: "url(girlie.png)",
        info: "Lowkey nice and good ",
      },
      {
        name: "Trần Thùy Linh",
        image: "url(girlie.png)",
        info: "Bro is pretyt lowkey but overall nice and gud. Hope you communicate more soon",
      },
      {
        name: "Đoàn Hải Ly",
        image: "url(haily.PNG)",
        info: "Nice and friendly. Skillful at many things ",
      },
      {
        name: "Lê Ngọc Minh",
        image: "url(girlie.png)",
        info: "Nice and funny. Sorry sometimes we exaggrate",
      },
      {
        name: "Nguyễn Hà My",
        image: "url(hamy.jpg)",
        info: "Bro is smart and funny",
      },
      {
        name: "Nguyễn Minh Ngân",
        image: "url(girlie.png)",
        info: "Yo smurf cat is nice and overall smart",
      },
      {
        name: "Nguyễn Phương Ngân",
        image: "url(phgngan.jpg)",
        info: "Bro so good i have nothing to say. Get better social skills bruh",
      },
      {
        name: "Bùi Thúy Quỳnh",
        image: "url(girlie.png)",
        info: "I dont know about you much but must be nice and funny",
      },
      {
        name: "Nguyễn Phương Thảo",
        image: "url(girlie.png)",
        info: "Bro is really lowkey. Hope to get more communication soon",
      },
      {
        name: "Lê Ngọc Anh Thư",
        image: "url(girlie.png)",
        info: "Fuck you parky dan. You are nice and kind ngl",
      },
      {
        name: "Dương Thị Thùy Trang",
        image: "url(girlie.png)",
        info: "Bro is pretty good and friendly",
      },
      {
        name: "Lê Quỳnh Trang",
        image: "url(lecheng.jpg)",
        info: "Bro is really friendly and is kind",
      },
    ];

    // Create member boxes
    membersData.forEach((memberData, index) => {
      const member = createMemberBox(memberData, index);
      membersSection.appendChild(member);
    });
  });

  // Function to create a member box
  function createMemberBox(memberData, index) {
    const member = document.createElement("div");
    member.classList.add("member");
    member.textContent = memberData.name;

    // Additional content (image and paragraph)
    const info = document.createElement("div");
    info.classList.add("info");
    const image = document.createElement("div");
    image.classList.add("image");
    image.style.backgroundImage = memberData.image;
    const paragraph = document.createElement("p");
    paragraph.textContent = memberData.info;
    info.appendChild(image);
    info.appendChild(paragraph);
    member.appendChild(info);

    // Toggle visibility of additional content when member box is clicked
    member.addEventListener("click", function () {
      // Close the previously opened box, if any
      if (openedBoxes[index]) {
        openedBoxes[index].classList.remove("opened");
      }

      // Open or close the clicked box
      if (openedBoxes[index] !== this) {
        this.classList.add("opened");
        openedBoxes[index] = this;
      } else {
        openedBoxes[index] = null;
      }
    });

    return member;
  }

  // Clear the "Members" section when switching to other sections
  const homeButton = document.getElementById("homeButton");
  const happyDayButton = document.getElementById("happyDayButton");

  homeButton.addEventListener("click", clearMembersSection);
  happyDayButton.addEventListener("click", clearMembersSection);

  function clearMembersSection() {
    membersSection.innerHTML = "";
    openedBoxes = []; // Reset opened boxes
  }
});

//day 8/3

document.addEventListener("DOMContentLoaded", function () {
  const happyDayButton = document.getElementById("happyDayButton");
  const happyDaySection = document.getElementById("happyDaySection");
  const passwordInput = document.getElementById("passwordInput");
  const submitPassword = document.getElementById("submitPassword");
  const paragraphs = document.getElementById("paragraphs");

  happyDayButton.addEventListener("click", function () {
    // Clear any existing content in the "Happy 8/3 day" section
    paragraphs.innerHTML = "";
    passwordInput.value = ""; // Clear the password input field
    happyDaySection.classList.add("showPasswordBox");
  });

  submitPassword.addEventListener("click", function () {
    const password = passwordInput.value.toLowerCase(); // Convert input to lowercase

    // Clear any existing content in the "Happy 8/3 day" section
    paragraphs.innerHTML = "";

    // Display paragraph based on the entered password
    switch (password) {
      case "chon li mup":
        showParagraph(
          "Hello motherfucker. Lời nhắn riêng gửi chốn li chò là cmm se biếu. Chu míp học khôn hơn và ngày càng múp nhé"
        );
        break;
      case "mẹ mày béo":
        showParagraph("Bố mày gay");
        break;

      case "password2":
        showParagraph("Paragraph for Password2");
        break;
      // Add more cases for other passwords
      default:
        showParagraph("Invalid password");
    }
  });

  function showParagraph(content) {
    const paragraph = document.createElement("p");
    paragraph.textContent = content;
    paragraphs.appendChild(paragraph);
    happyDaySection.classList.remove("showPasswordBox");
  }
});
