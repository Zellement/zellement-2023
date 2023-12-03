// export default `
//     query WorkQuery ($slug: String!) {
//         work(filter: {slug: {eq: $slug}}) {
//             id
//             title
//             website
//             employer {
//                 title
//                 id
//                 website
//             }
//             logoIsBlack
//             logo {
//                 id
//                 url
//                 format
//                 responsiveImage {
//                     alt
//                     base64
//                     bgColor
//                     title
//                 }
//             }
//             techStack {
//                 title
//                 id
//                 logoIsDark
//                 logo {
//                     id
//                     url
//                 }
//             }
//             teaserLine
//             teaserStack
//             slug
//             date
//             heroImage {
//                 responsiveImage(
//                     imgixParams: { fit: crop, w: 1000, h: 530, auto: format }
//                 )
//                 {
//                     id
//                     src
//                     width
//                     height
//                     alt
//                     title
//                 }
//             }
//             overview
//             additional
//         }
//     }
// `
