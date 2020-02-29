import { users } from "./users.js";

export const posts = [
    {
      id: 'post001',
      author: users[0],
      title: 'title1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum, dolor ut posuere placerat, mauris nisl lacinia lorem, hendrerit molestie tortor sem vitae arcu. Maecenas at lorem ex. Ut a tempus urna, in scelerisque leo. Aliquam at nibh vitae diam tempor ultrices nec nec ipsum. Duis consectetur arcu facilisis laoreet consequat. In semper ultrices vehicula. Sed auctor vel lectus cursus consequat. Nam semper lorem nec ullamcorper maximus. Donec ipsum nisl, faucibus sollicitudin nulla in, rhoncus tempus lorem. Aliquam vel varius est. Nam porta vulputate tortor, vitae dictum nibh pharetra porttitor. Suspendisse eget ultrices leo, molestie facilisis turpis.',
      date: new Date(2019, 11, 31),
      modificationDate: new Date(2020, 1, 15),
      views: 100,
      keywords: ['post1', 'firstpost', 'lorempsum']
  
    },
    {
      id: 'post002',
      author: users[1],
      title: 'title2',
      body: 'Sed porttitor nisi nec magna posuere mattis vitae in urna. Mauris sagittis nulla libero, bibendum ornare mi feugiat eu. Fusce viverra rutrum eros sit amet tincidunt. Mauris metus risus, ornare ac aliquam sit amet, facilisis quis lacus. Suspendisse quis ullamcorper arcu. Cras risus magna, sollicitudin id ultrices nec, feugiat sed sapien. Cras ornare vestibulum venenatis. Donec eu blandit nunc. Nullam venenatis tortor vel sapien euismod elementum. Duis interdum magna sed sollicitudin convallis. Sed condimentum est elit, et porttitor magna auctor at. Morbi sed arcu vitae est mollis ultrices. Sed blandit sed ex ac sollicitudin. Nunc quis tincidunt nulla. Ut malesuada felis eu risus venenatis dictum.',
      date: new Date(2020, 0, 3),
      modificationDate: new Date(2020, 1, 10),
      views: 256613,
      keywords: ['post2', 'happiness']
    },
    {
      id: 'post003',
      author: users[2],
      title: 'title3',
      body: 'Etiam rhoncus orci finibus nulla hendrerit laoreet. Etiam condimentum lectus ut tempor hendrerit. Duis interdum nulla eget tempus placerat. Vestibulum blandit magna ultricies ligula consequat, scelerisque placerat tortor ultricies. Nullam finibus dictum tempor. Nam a commodo mauris. Sed laoreet sem non fringilla posuere. Integer eget augue pulvinar, aliquam quam at, accumsan tortor. Nulla mollis aliquam mollis. Cras dui odio, placerat tempor lectus sit amet, laoreet volutpat libero. Suspendisse feugiat eros at sem pretium ultricies. Pellentesque et orci libero. In eu rutrum tellus. Vivamus molestie tristique congue.',
      date: new Date(2020, 0, 5),
      modificationDate: new Date(2020, 1, 7),
      views: 0,
      keywords: ['post3', 'love']
    },
    {
      id: 'post004',
      author: users[4],
      title: 'title4',
      body: 'Sed in molestie mauris. Nam auctor mi vitae tempor condimentum. Maecenas quis odio eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec elementum scelerisque velit, a luctus lacus auctor et. Vestibulum dictum sollicitudin velit et dictum. Nulla convallis tortor in dolor dignissim, nec laoreet metus auctor. Donec congue eros quam, id varius mauris tempus id. Donec mollis ultricies odio ut tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      date: new Date(2020, 1, 20),
      modificationDate: new Date(2020, 2, 12),
      views: 573,
      keywords: ['post4', 'january', 'home']
    },
    {
      id: 'post005',
      author: users[3],
      title: 'title5',
      body: 'Nunc volutpat elit non orci molestie dictum. Etiam rhoncus maximus elit, sit amet vehicula orci gravida eget. Duis non consequat velit. Aliquam elit est, volutpat ut diam vel, ullamcorper blandit odio. Etiam in bibendum dui, ut faucibus neque. Maecenas placerat eu dui quis feugiat. Nullam et egestas nibh, at rutrum lectus. Praesent a nisl facilisis, condimentum massa ut, maximus libero.',
      date: new Date(2020, 1, 3),
      modificationDate: new Date(2020, 1, 14),
      views: 15,
      keywords: ['post5', 'news']
    }
  ]