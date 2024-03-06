import $ from 'jquery'

const loadHtmlSuccessCallbakcs = []

export function onLoadHtmlSuccess(callback) {
    if (!loadHtmlSuccessCallbakcs.includes(callback)) {
        loadHtmlSuccessCallbakcs.push(callback)
    }
}

function loadIncludes(parent) {
    if (!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function (i, e) {
        const url = $(e).attr('wm-include')
        $ajax({
            url,
            success(data){
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccessCallbakcs.forEach(callback => callback(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()