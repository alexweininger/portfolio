// var blocks = document.getElementsByClassName('content-block');
// var sidebar = document.getElementById('sidebar');
// var bars = []
// var blocksY = [];
// for (block of blocks) {
//     var bar = document.createElement('div');
//     bar.className = 'bar';
//     sidebar.appendChild(bar);
//     bars.push(bar);
//     var blockRect = block.getBoundingClientRect();
//     blocksY.push(blockRect.top);
// }

// console.log(blocksY);

// while (true) {
//     for (i = 0; i < blocksY.length; i++) {
//         if (window.scrollY >= blocksY[i]){
//             for(bar of bars){
//                 bar.classList.remove('active');
//             }
//             bars[i].classList.add('active');
//             //console.log(i);
//         }
//     }
// }

var parent = document.html;
var child = document.body;
child.style.right = child.clientWidth - child.offsetWidth + "px";

let copyrightString = document.getElementById('copyright');
copyrightString.innerHTML = 'Alex Weininger 2017-' + (new Date).getFullYear();

(async () => {
    const GITHUB_USERNAME = 'byliuyang';
    const COMMITS_CONTAINER = '#github-contributions';
    const LANGUAGES_CONTAINER = '#github-language-distribution';

    const githubStats = await GithubStats('alexweininger');

    let githubCommits = document.querySelector('#commits');
    /* Render SVG for commit contributions */
    let commitsContribSVG = githubStats.commitsContribSVG({
        rows: 7,
        space: 4,
        rectWidth: 16,
        levelColors: [
            {
                minCommits: 0,
                color: '#ebedf0'
            },
            {
                minCommits: 1,
                color: '#c6e48b'
            },
            {
                minCommits: 9,
                color: '#7bc96f'
            },
            {
                minCommits: 17,
                color: '#239a3b'
            },
            {
                minCommits: 26,
                color: '#196127'
            }
        ]
    });
    githubCommits.appendChild(commitsContribSVG);

    let githubLanguageDistribution = document.querySelector(LANGUAGES_CONTAINER);
    /* Render SVG for language contributions */
    let languageContribSVG = githubStats.languagesContribSVG({
        barHeight: 20,
        barWidth: githubLanguageDistribution.offsetWidth,
        lineSpacing: 4,
        languageNameWidth: 100,
        fontSize: 14
    });
    githubLanguageDistribution.appendChild(languageContribSVG);
})();
