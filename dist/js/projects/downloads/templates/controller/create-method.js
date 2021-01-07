const createMethod = `
    public function create()
    {
        return view('admin.{{table}}.create');
    }
    `;

export default createMethod;
