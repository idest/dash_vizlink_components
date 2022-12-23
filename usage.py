import dash_vizlink_components
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

app.layout = html.Div([
    dash_vizlink_components.Breadcrumbs(
        id='breadcrumbs',
        items=[
            {'label': 'First'},
            {'label': 'Second'},
            {'label': 'Third'},
        ],
        value='Second',
    ),
    html.Div(id='output')
])


@callback(Output('output', 'children'), Input('breadcrumbs', 'value'))
def display_output(value):
    return [
        html.H3(value),
        html.P('This is the {} page.'.format(value.lower()))
    ]


if __name__ == '__main__':
    app.run_server(debug=True)
