const Handlebars = require('handlebars');
module.exports = {
    sum: (a, b) =>a + b,

           sortable: (field, sort) =>{
            const currentType = field === sort.column ? sort.type : 'default';
            const iconTypes = {
                default: 'oi oi-elevator',
                asc: 'oi oi-sort-ascending',
                desc: 'oi oi-sort-descending',
            };
            const sortTypes = {
                default: 'desc',
                asc: 'desc',
                desc: 'asc',
            };
            const iconType = iconTypes[currentType];
            const sortType = sortTypes[currentType];

            const address = Handlebars.escapeExpression(`?_sort&column=${field}&type=${sortType}`);

            const output = `<a href="${address}">
                        <span class="${iconType}"></span>
                    </a> `;

             return new Handlebars.SafeString(output);
            
           }
};