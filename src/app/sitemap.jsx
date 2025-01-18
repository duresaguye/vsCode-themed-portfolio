import { MetadataRoute } from "next";

export default async function sitemap(){
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`, // Home page
            priority: 1.0, // High priority for the home page
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`, 
            priority: 0.8, // Medium priority
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
            priority: 0.8, // Medium priority
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`, 
            priority: 0.7, // Lower priority than main pages
        },
   
    ];
}