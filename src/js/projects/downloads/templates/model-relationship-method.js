const modelRelationship = `
    public function {{method}}()
    {
        return $this->{{type}}({{foreignModel}}::class);
    }
    `;

export default modelRelationship;