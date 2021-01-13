const updateMethod = `
    public function update(Update{{model}} $request, int $id)
    {
        \${{tableSingular}} = {{model}}::findOrFail($id);
        \${{tableSingular}} = $post->fill($request->validated());
        \${{tableSingular}}->save();

        return redirect()
            ->route('admin.{{table}}.index')
            ->with('message', 'The {{tableSingular}} record has been successfully updated');
    }
    `;

export default updateMethod;
