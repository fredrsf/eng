[[ extends  TEMPLATE_PATH ~ "base/main.tpl" ]]
[[block content]]
[[ include TEMPLATE_PATH ~ "blocks/left_side.tpl"]]

<div class="right-block">

    <div class="cucumbers">
        <a href="/">Главная</a> 
        <span>/</span> <a href="/{meet_url.redir}/">{meet_url.caption}</a>
        <span>/</span> <a href="/{meet_url.redir}/{item.cat.redir}/">{item.cat.name}</a> <span>/</span>
        {item.name}
    </div>
    
    <h1>{item.cat.name}</h1>
    [[if categories]]
        <div class="afisha-topic">
        [[for item in categories]]
             <a href="/[[if not(url)]]{meet_url.redir}[[else]]{url}[[endif]]/{item.redir}/" [[if request.modul == item.redir]]class="active"[[endif]]>{item.name}</a>
        [[endfor]]
        </div>
    [[endif]]
    
    [[ include TEMPLATE_PATH ~ "blocks/meet_filter.tpl"]]
    
    <div class="about-header">{item.name}</div>
    
    {item.text|raw}

</div>
[[endblock]]