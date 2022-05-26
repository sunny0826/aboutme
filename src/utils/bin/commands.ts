// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'contact' - contact info.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

export const baidu = async (args: string[]): Promise<string> => {
  return `想要代码写得好，请先关闭百度`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// website
export const website = async (args: string[]): Promise<string> => {
  window.open(`https://guoxudong.io`);

  return 'Opening guoxudong.io...';
};

// Banner
export const banner = (args?: string[]): string => {
  return `                                  My Conquest is the Sea of Stars 💫

  ▄████  █    ██  ▒█████  ▒██   ██▒ █    ██ ▓█████▄  ▒█████   ███▄    █   ▄████       ██▓ ▒█████  
 ██▒ ▀█▒ ██  ▓██▒▒██▒  ██▒▒▒ █ █ ▒░ ██  ▓██▒▒██▀ ██▌▒██▒  ██▒ ██ ▀█   █  ██▒ ▀█▒     ▓██▒▒██▒  ██▒
▒██░▄▄▄░▓██  ▒██░▒██░  ██▒░░  █   ░▓██  ▒██░░██   █▌▒██░  ██▒▓██  ▀█ ██▒▒██░▄▄▄░     ▒██▒▒██░  ██▒
░▓█  ██▓▓▓█  ░██░▒██   ██░ ░ █ █ ▒ ▓▓█  ░██░░▓█▄   ▌▒██   ██░▓██▒  ▐▌██▒░▓█  ██▓     ░██░▒██   ██░
░▒▓███▀▒▒▒█████▓ ░ ████▓▒░▒██▒ ▒██▒▒▒█████▓ ░▒████▓ ░ ████▓▒░▒██░   ▓██░░▒▓███▀▒ ██▓ ░██░░ ████▓▒░
 ░▒   ▒ ░▒▓▒ ▒ ▒ ░ ▒░▒░▒░ ▒▒ ░ ░▓ ░░▒▓▒ ▒ ▒  ▒▒▓  ▒ ░ ▒░▒░▒░ ░ ▒░   ▒ ▒  ░▒   ▒  ▒▓▒ ░▓  ░ ▒░▒░▒░ 
  ░   ░ ░░▒░ ░ ░   ░ ▒ ▒░ ░░   ░▒ ░░░▒░ ░ ░  ░ ▒  ▒   ░ ▒ ▒░ ░ ░░   ░ ▒░  ░   ░  ░▒   ▒ ░  ░ ▒ ▒░ 
░ ░   ░  ░░░ ░ ░ ░ ░ ░ ▒   ░    ░   ░░░ ░ ░  ░ ░  ░ ░ ░ ░ ▒     ░   ░ ░ ░ ░   ░  ░    ▒ ░░ ░ ░ ▒  
      ░    ░         ░ ░   ░    ░     ░        ░        ░ ░           ░       ░   ░   ░      ░ ░  
                                             ░                                    ░               
  
   Find more information at: <u><a class="text-light-blue dark:text-dark-blue underline" href="https://guoxudong.io"target="_blank">guoxudong.io</a></u>

   Usage:
     [command]
   
   Available Commands:
     repo         Type repo or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
     qr           Display QR code of WeChat Official Accounts
     contact      Display contact information
     github       Display my GItHub
     help         Help about any command
     weather      Print the weather for the specified city
     website      Open <u><a class="text-light-blue dark:text-dark-blue underline" href="https://guoxudong.io"target="_blank">guoxudong.io</a></u>
   Search Commands: 
     google       Searching google for [input]
     duckduckgo   Searching duckduckgo for [input]
     bing         Searching bing for [input]
     baidu        Searching baidu for  [input]
     reddit       Searching reddit for  [input]
  
  Use the "help" command to find more commands.
`;
};
