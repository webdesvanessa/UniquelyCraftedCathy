export default {
    title: "Site",
    name: "site",
    type: "document",
    fields: [
        {
            title: "Header",
            name: "header",
            description: "",
            validation: Rule => Rule.required(),
            type: "document",
        },
        {
            title: "Footer",
            name: "footer",
            description: "",
            validation: Rule => Rule.required(),
            type: "document",
        },
        // {
        //     title: "",
        //     name: "",
        //     description: "",
        //     validation: Rule => Rule.required(),
        //     type: "",
        // },
    ]
}