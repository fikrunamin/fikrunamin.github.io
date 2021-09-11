import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/fikrunamin/fikrunamin.github.io.git', // Update to point to your repository
        user: {
            name: 'fikrunamin', // update to use your name
            email: 'fikrun65@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);