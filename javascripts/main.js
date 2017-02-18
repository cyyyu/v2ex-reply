/*
  Extension for v2ex.com
  */

// Use print as console.log
let print = console.log.bind(console);

// The html
const replyBoxHtmlTemplate = () => `
    <li>{{replace}}</li>
    `

// All replys in current page.
let allDoms = () => document.querySelectorAll('.reply_content');

// Does a reply @someone ?
let isMetioningSomeOne = (content) => {
    return content.indexOf("@") > -1
}

// Map util.
let map = (target, fn) => {
    if (Array.isArray(target)) {
        return Array.prototype.map.call(target, fn);
    } else {
        let re = [],
            val;
        for (let key in target) {
            val = target[key];
            re.push(fn(val, key));
        }
        return re;
    }
}

// Get text of a dom.
let getText = (e) => {
    let t = "";
    e = e.childNodes || e;
    for (let j = 0; j < e.length; j++) {
        if (!e[j]) continue;
        t += e[j].nodeType != 1 ?
            e[j].nodeValue : getText(e[j].childNodes);
    }
    return t;
}

// Get all metioned users in a reply.
let getMetioned = (content) => {
    let o = content.match(/\@[^\s]*/g) || [];
    return map(o, (val) => {
        return val.replace(/\@/, '');
    })
}

// Insert html
let setBoxHtml = (dom, users, level) => {
    let li = replyBoxHtmlTemplate(),
        html = '';
    map(users, (user) => {
        let contents = getUserContents(user, level);
        map(contents, (content) => {
            html += li.replace(/\{\{replace\}\}/g, `
                ${user}: ${content}
            `);
        })
    })
    dom.innerHTML = html;
}

// 
let setReplyBoxDom = (dom, users) => {
    // Create a box.
    let div = document.createElement('div');
    div.innerHTML = replyBoxHtmlTemplate;
    div.setAttribute('class', 'reply_box');

    let level = 0;
    try {
        level = parseInt(dom.parentElement.querySelector('.fr .no').textContent);
    } catch (err) {
        print(err);
        level = 0
    }

    // Insert contents.
    setBoxHtml(div, users, level);

    // Append to dom.
    dom.appendChild(div);

    // Bind events listeners.
    dom.onmouseover = () => {
        setTimeout(() => {
            dom.lastChild.style.display = 'block';
        }, 300)
    }
    dom.onmouseout = () => {
        setTimeout(() => {
            dom.lastChild.style.display = 'none';
        }, 300)
    }
}

//
let checkDom = (dom) => {
    let content = getText(dom);
    if (content && isMetioningSomeOne(content)) {
        dom.style.position = 'relative';
        setReplyBoxDom(dom, getMetioned(content));
    }
}

// Get replys of specified user.
let getUserContents = (user, level) => {
    let re = [];
    for (let i = 0, l = allContents.length - 1; i < l; i++) {
        if (allContents[i].user === user && i < level) {
            re.push(allContents[i].content);
        }
    }
    return re
}

// ============================================
let allContents = map(allDoms(), (dom) => {
    if (!dom || !dom.previousElementSibling) return {}
    let user = '';
    try {
        user = dom.parentElement.querySelector('strong a').text;
    } catch (err) {
        print(err, dom);
        user = '';
    }
    return {
        user: user,
        content: getText(dom)
    }
})

map(allDoms(), checkDom);