const destroyMethod = `
    public function destroy(Request $request, int $id)
    {
        \${{tableSingular}} = {{model}}::findOrFail($id);
        \${{tableSingular}}->delete();

        return redirect()
            ->route('admin.{{table}}.index')
            ->with('message', 'The record has been successfully deleted');
    }`;

export default destroyMethod;
