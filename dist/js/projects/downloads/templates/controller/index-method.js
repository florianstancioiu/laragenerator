const indexMethod = `
    public function index()
    {
        \${{table}} = {{model}}::orderBy('id', 'DESC')->paginate();

        return view('admin.{{table}}.index', compact('{{table}}'));
    }
    `;

export default indexMethod;
