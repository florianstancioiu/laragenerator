const editMethod = `
    public function edit(int $id)
    {
        \${{tableSingular}} = {{model}}::findOrFail($id);

        return view('admin.{{table}}.edit', compact('{{tableSingular}}'));
    }
    `;

export default editMethod;
