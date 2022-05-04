export const extractBodyFromHtml = (fluxHtml) => {
    return fluxHtml.substring(
            fluxHtml.indexOf("<body>") + 6, 
            fluxHtml.lastIndexOf("</body>")
        )
}