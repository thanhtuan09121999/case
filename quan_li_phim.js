class Movie {
    constructor(id, image, name, date, time, link) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.date = date;
        this.time = time;
        this.link = link;
    }
}

let one = new Movie(1, 'https://static.8cache.com/cover/o/eJzLyTDR180LKc8Kjw9w9kly1Q9z8nUxyTQ3Ms721HeEgmxvC_3MsEKLgJLCxIqIcv1iAwDT_xD0/dau-la-dai-luc-2.jpg', 'Đấu La Đại Lục', 'Thứ Bảy', '12h00', 'https://www.youtube.com/watch?v=4tdjG4WBy9Q&t=167s')
let two = new Movie(2, 'https://genk.mediacdn.vn/DlBlzccccccccccccE5CT3hqq3xN9o/Image/2014/01/QAnh1/1-dau-khi-dai-luc-5f05e.jpg', 'Đấu Phá Thương Khung', 'Chủ Nhật', '10h30', 'https://www.youtube.com/watch?v=bcjVm61cU78&t=119s')
let three = new Movie(3, 'https://truyendep.com/wp-content/uploads/2020/10/Toan-Chuc-Phap-Su.jpeg', 'Toàn Chức Pháp Sư', 'Sắp Công Chiếu', 'Sắp Công Chiếu', 'https://www.youtube.com/watch?v=I5YPOLv30FI');
let four = new Movie(4, 'https://i1.wp.com/nobiphim.com/wp-content/uploads/2020/08/Nguy%C3%AAn-Long.jpg?fit=480%2C640&ssl=1', 'Nguyên Long', 'Sắp Công Chiếu', 'Sắp Công Chiếu', 'https://www.youtube.com/watch?v=nv6zt_RFf_A');
let manage = [one, two, three, four,];
let current = -1;

function display() {
    let str = '';
    for (let i = 0; i < manage.length; i++) {

        str += '<tr>';
        str += '<td bgcolor="#f5deb3">' + manage[i].id + '</td>';
        str += '<td bgcolor="#f5deb3"><img src="' + manage[i].image + '" alt=""></td>';
        str += '<td bgcolor="#f5deb3"> ' + manage[i].name + '</td>';
        str += '<td bgcolor="#f5deb3">' + manage[i].date + '</td>';
        str += '<td bgcolor="#f5deb3">' + manage[i].time + '</td>';
        str += '<td><a href="' + manage[i].link + '" style="color: yellow">' + manage[i].link + '</a></td>';
        str += '<td bgcolor="#f5deb3"><button onclick="editMovie(' + i + ')" style="color: red">Edit</button></td>';
        str += '<td bgcolor="#f5deb3"><button onclick="deleteMovie(' + i + ')" style="color: red">Delete</button></td>';

    }
    document.getElementById('list').innerHTML = str
}

display()

function addMovie() {
    document.getElementById('add').style.display = 'block';
}

function them() {
    let id = document.getElementById("a").value
    let image = document.getElementById("b").value;
    let name = document.getElementById("c").value;
    let date = document.getElementById("d").value;
    let time = document.getElementById("e").value;
    let link = document.getElementById("g").value;
    document.getElementById('add').innerHTML = ''
    let five = new Movie(id, image, name, date, time, link);
    manage.push(five);
    display()

}

function deleteMovie(index) {
    let check = confirm("do you want delete movie")
    if (check) {
        manage.splice(index, 1);
        display()
    }
}

function editMovie(index) {
    document.getElementById('adc').style.display = 'block';
    current = index;
    document.getElementById("1").value = manage[index].id;
    document.getElementById("2").value = manage[index].image;
    document.getElementById("3").value = manage[index].name;
    document.getElementById("4").value = manage[index].date;
    document.getElementById("5").value = manage[index].time;
    document.getElementById("6").value = manage[index].link;

}
function updateMovie() {
    let index = document.getElementById("1").value-1;
    manage[index].image = document.getElementById("2").value;
    manage[index].name = document.getElementById("3").value;
    manage[index].date = document.getElementById("4").value;
    manage[index].time = document.getElementById("5").value
    manage[index].link = document.getElementById("6").value;
    document.getElementById('adc').style.display = 'none';
    display()
}

