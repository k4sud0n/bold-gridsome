const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your post title: ", (postTitle) => {
  const date = new Date().toISOString().split('T')[0];
  const title = postTitle.replace(/\s/g, '-');
  const path = postTitle.toLowerCase().replace(/\s/g, '-');

  rl.question("What's your post's summary: ", (postSummary) => {
    const data = `---\ntitle: '${postTitle}'\npath: /${path}\ndate: ${date}\nsummary: '${postSummary}'\ntags: ['Add your tag here']\n---\n`;

    fs.writeFile(`post/${date}-${title}.md`, data, 'utf-8', (error) => {
      if (error) throw error;
    });

    console.log(`Done!`);
    rl.close();
  });
});
