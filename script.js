function toggleWindow(name, open) {
    const doc = document.getElementById(name);
    doc.style.display = open ? "block" : "none";
    const brotherComponents = doc.parentElement.children;
    let noBrothers = true;
    for (let i = 0; i < brotherComponents.length; i++) {
        if (brotherComponents[i].style.display !== 'none') {
            noBrothers = false;
            break;
        }
    }
    doc.parentElement.style.position = noBrothers ? 'absolute' : 'relative'
    doc.parentElement.style.width = noBrothers ? "0" : "100%";
    doc.parentElement.style.height = noBrothers ? "0" : "100%";
    if (open) {
        const interval = setInterval(() => {
            doc.style['border-style'] = doc.style['border-style'] === "solid" ? "none" : "solid";
        }, 50);
        setTimeout(() => {
            clearInterval(interval);
            doc.style['border-style'] = "none";
        }, 500)
    }
}

function main() {
    eva.replace();
}

main();
