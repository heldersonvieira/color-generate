const Get = {
    color() {
        let letters = 'ABCDEF0123456789';
        let hexColor = '#';
        
        for (let i = 0; i < 6; i++) {
            let random = Math.floor(Math.random() * 16)
            hexColor += letters[random];
        }
      
        return hexColor;
    }
}

const Set = {
    color() {
        const buttonContent = document.querySelector('.btn');
        const body = document.querySelector('body');
        
        buttonContent.innerHTML = Get.color();
        body.style = `background: ${Get.color()}`;
    }
}

const Init = {
    click() {
        document.querySelector('.btn').onclick = Set.color;
    }
}

const App = {
    init() {
        Init.click();
    }
}

App.init();
