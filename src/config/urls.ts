const host = 'http://www.brooklynlandscapes.com';
const title = 'Brooklyn Landscapes';

const urls = {
    home: {
        path: '/',
        title: title,
        description:
            'Brooklyn Landscapes is a commercial landscaping company established for over twenty years. Located in Manchester, UK; able to serve the majority of the United Kingdom. CHAS, CSCS, ROLO, SMAS, Construction Line accredited.',
        keywords: '',
        canonical: host
    },
    about: {
        path: '/about',
        title: `About us | ${title}`,
        description:
            'Brooklyn Landscapes is a commercial landscaping company established for over twenty years. Located in Manchester, UK; able to serve the majority of the United Kingdom. CHAS, CSCS, ROLO, SMAS, Construction Line accredited.',
        keywords: '',
        canonical: `${host}/about`
    },
    projects: {
        path: '/projects',
        title: `Our work | ${title}`,
        description:
            'Brooklyn Landscapes is a commercial landscaping company established for over twenty years. Located in Manchester, UK; able to serve the majority of the United Kingdom. CHAS, CSCS, ROLO, SMAS, Construction Line accredited.',
        keywords: '',
        canonical: `${host}/projects`
    },
    clients: {
        path: '/clients',
        title: `Our clients | ${title}`,
        description:
            'Brooklyn Landscapes is a commercial landscaping company established for over twenty years. Located in Manchester, UK; able to serve the majority of the United Kingdom. CHAS, CSCS, ROLO, SMAS, Construction Line accredited.',
        keywords: '',
        canonical: `${host}/clients`
    },
    contact: {
        path: '/contact',
        title: `Contact us | ${title}`,
        description:
            'Brooklyn Landscapes is a commercial landscaping company established for over twenty years. Located in Manchester, UK; able to serve the majority of the United Kingdom. CHAS, CSCS, ROLO, SMAS, Construction Line accredited.',
        keywords: '',
        canonical: `${host}/contact`
    }
};

export default urls;
