export default[
    {
        name:'Blog Title',
        desc:'An AI tool that generates blog title depends on yout blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 10 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Blog Content',
        desc:'An AI tool that serves as your personal blog post title',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2593/2593549.png',
        slug:'blog-content-generation',
        aiPrompt:'Generate Blog content based on topic and outline in the',
        form:[
            {
                label:'Enter your blog topic',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter blog outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Youtube Tags',
        desc:'An AI tool that generates blog title depends on yout blog information',
        category:'Youtube Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug:'Youtube-tag',
        aiPrompt:'Generate 10 Youtube tags in bullet point based on the give niche & outline and give me result in Rich text editor format',
        form:[
            {
                label:'Enter your youtube title',
                field:'input',
                name:'title',
                required:true
            },
            {
                label:'Enter your youtube video outline here (optional)',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Blog Topic Ideas',
        desc:'An AI tool that serves as your personal blog post title',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug:'blog-topic-idea',
        aiPrompt:'Generate top 5 Blog Topic ideas in bullet point only on topic',
        form:[
            {
                label:'Enter your Niche',
                field:'input',
                name:'niche',
                required:true
            },
        ]
    },
    {
        name:'Youtube SEO Title ',
        desc:'An AI tool that serves as your personal blog post title',
        category:'Youtube-Tools',
        icon:'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug:'youtube-seo-title',
        aiPrompt:'Give me best SEO optimized high ranked 5 title idea on youtube',
        form:[
            {
                label:'Enter your youtube video topic keywords',
                field:'input',
                name:'keywords',
                required:true
            },
            {
                label:'Enter youtube description outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Youtube Description',
        desc:'An AI tool that serves as your personal blog post title',
        category:'Youtube-Tools',
        icon:'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug:'youtube-description',
        aiPrompt:'Generate Youtube description with emoji under 4-5 topic',
        form:[
            {
                label:'Enter your blog topic/title',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter youtube outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Add Emoji to Text',
        desc:'An AI tool that serves as your personal blog post title',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        slug:'add-emoji-to-text',
        aiPrompt:'Add Emoji to outline text depends on outline and ',
        form:[
            {
                label:'Enter your text to add emojis',
                field:'textarea',
                name:'outline',
                required:true
            },
        ]
    },
    {
        name:'Rewrite Article (Plagiarism free)',
        desc:'Use this tools to rewrite existing Article or Blog Post',
        category:'Rewriting-Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/2696/2696555.png',
        slug:'rewrite-article',
        aiPrompt:'Rewrite give article without any plagiarism in rich text editor format',
        form:[
            {
                label:'Provide your Article/Blogpost or any other',
                field:'textarea',
                name:'article',
                required:true
            },
            {
                label:'Enter youtube outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Instagram Hash tag Generator',
        desc:'Use this tools to genearte instagram hastag',
        category:'Hash-tag tool',
        icon:'https://cdn-icons-png.flaticon.com/128/16382/16382189.png',
        slug:'Hash-tag',
        aiPrompt:'An AI tools that serves as your personal blog title writer, generating catchy and viral-worthy titles in your chosen language.',
        form:[
            {
                label:'Enter Keywords for your Instagram hastag',
                field:'textarea',
                name:'keywords',
                required:true
            },
        ]
    },
    {
        name:'Instagram Post Generator',
        desc:'An AI tool that serves as your personal blog post title',
        icon:'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        category: 'blog',
        slug:'instagram-post-generator',
        aiPrompt:'Generate 3 Instagram post depends on a given keywords',
        form:[
            {
                label:'Enter keywords for your post',
                field:'input',
                name:'keywords',
                required:true
            },
            {
                label:'Enter youtube outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },
]