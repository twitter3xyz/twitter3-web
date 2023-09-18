export const formatAddress = (text: string, start = 4, end = 4): string => (
    text?.length > start + end ? text.replace(text.substring(start, text.length - end), '...') : text
)