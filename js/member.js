const members = [
    {
        name: "HANNI",
        imageURL: "assets/HANNI.jpg",
    },
    {
        name: "MINJI",
        imageURL: "assets/MINJI.jpg",
    },
    {
        name: "DANIELLE",
        imageURL: "assets/DANIELLE.jpg",
    },
    {
        name: "HYEIN",
        imageURL: "assets/HYEIN.jpg",
    },
    {
        name: "HAERIN",
        imageURL: "assets/HAERIN.jpg",
    },
]

const memberList = document.getElementById('memberList');
members.forEach((member) => {
    const listItem = document.createElement('li');
    listItem.className = 'flex flex-col gap-2 items-center w-[250px] transition-all ease-in-out duration-500 hover:scale-110 hover:drop-shadow-[20px_25px_50px_rgba(0,0,0,1)] hover:text-white';
    listItem.innerHTML = `
        <img src="https://storage.googleapis.com/nj-img/${member.imageURL}" alt="${member.name}" class="rounded-[20px]" title="${member.name}">
        <h3 class="text-[20px]">${member.name}</h3>
    `;
    memberList.appendChild(listItem);
});