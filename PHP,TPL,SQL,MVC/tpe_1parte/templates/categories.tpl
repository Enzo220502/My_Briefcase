{include file="header.tpl"}
<div>
    <label>Get Cars By Type:</label>
    <select name="typeVehicle" class="form-control form-select-sm" aria-label=".form-select-sm example">
        {foreach from=$categories item = $engine}
            <option value="{$engine->ID}">{$engine->type}</option>
        {/foreach}
    </select>
</div>
<div class="table-responsive-sm">
    <table class="table-responsive table-sm align-middle">
            <thead class="table-light">
                    <tr>
                        <th scope="col">Type</th>
            <thead>
            <tbody>
                {foreach from=$categories item=$category}
                        <tr>
                            <td colspan="1">{$category->type}</td>
                        </tr>
                {/foreach}
            </tbody>            
    </table>
</div>
{include file = "foother.tpl"} 
