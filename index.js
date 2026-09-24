const projects = {
    "speed-test": {
        title: "Speed Test",
        img: "speedTest.png",
        desc: "Fifteen languages — x86-64 assembly, C, C++, Rust, Swift, Go, Java, C#, JavaScript, Lua, Perl, PHP, Python, Ruby, COBOL — plus a NumPy row for Python, running the same six algorithms on the same input, timed side by side. Every entry runs at its shipped best: -O3 and -march=native where there is a compiler, the tracing JIT for PHP, YJIT for Ruby — so a slow row is the language's bill, not the code's.",
        link: "https://github.com/guy5116/Speed-Test"
    },
    "basic-c": {
        title: "Basic C",
        img: "basicC.png",
        desc: "A collection of small C programs — Fibonacci, sorting, graphs, structs — written as deliberate practice with the language. Not polished, but each one taught me something about pointers, memory, or why the compiler was yelling at me.",
        link: "https://github.com/guy5116/basic-C"
    },
    "ytdownloader": {
        title: "Youtube Video Downloader",
        img: "ytdownloader.png",
        desc: "Youtube video downloader written in python and powered by Node.js, FFmpeg, and yt_dlp. Can easily download videos in different qualities or just the audio using the gui.",
        link: "https://github.com/guy5116/Youtube-Video-Downloader"
    },
    "imageterm": {
        title: "Image Term",
        img: "imageterm.png",
        desc: "Image display command using api calls to pull images based on user tags, only works with kitty, written in python.",
        link: "https://github.com/guy5116/imageTerm"
    }
};

const dialog = document.getElementById("project-dialog");

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const p = projects[card.dataset.project];
        dialog.querySelector("img").src = p.img;
        dialog.querySelector("h2").textContent = p.title;
        dialog.querySelector("p").textContent = p.desc;
        dialog.querySelector("a").href = p.link;
        dialog.showModal();
    });
});

dialog.querySelector(".close").addEventListener("click", () => dialog.close());

// close when the dimmed backdrop is clicked
dialog.addEventListener("click", e => {
    if (e.target === dialog) dialog.close();
});


function webhook(){
	const name = document.getElementById("fname");
	const email = document.getElementById("femail");
	const phone = document.getElementById("fphone");
	const reason = document.getElementById("freason");

	if (name.value === ""){
		alert("No name given");
		return;
	}
	
	if (email.value === ""){
		alert("No email given");
		return;
	}
	
	if (phone.value === ""){
		alert("No phone given");
		return;
	}
	
	if (reason.value === ""){
		alert("No reason given");
		return;
	}

	const message = `\n${name.value} is contacting you regarding\n:${reason.value}\n\nContact them via\nPhone: ${phone.value}\nEmail: ${email.value}`;
	alert("Message Sent :D")
	const url = "https://discord.com/api/webhooks/1552710262656598047/v2XEEXjLjcMP8hScYf2s_9McvC9FJDFb8xE-5JXvd9CjbReUHKnMzk5xZjsDnO-dc1Ys";

	const payload = {
		content: message,
		username:"CSCI_Project",
	};

	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	})
	.then(response => {
	    if (response.ok) {
	      console.log("Message sent successfully!");
	    } else {
	      console.log("Failed to send message.");
	    }
	  })
	  .catch(error => console.error("Error:", error));
}
