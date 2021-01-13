const storeMethod = `
    public function store(Store{{model}} $request)
    {
        \${{tableSingular}} = new {{model}}($request->validated());
        \${{tableSingular}}->save();

        return redirect()
            ->route('admin.{{table}}.index')
            ->with('message', 'The record has been successfully stored');
    }
    `;

export default storeMethod;
