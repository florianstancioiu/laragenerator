import Sidebar from './projects/sections/sidebar';
import TableFields from './projects/sections/table-fields';
import Seeder from './projects/sections/seeder';
import Model from './projects/sections/model';
import Relationships from './projects/sections/relationships';
import Validation from './projects/sections/validation';
import Controller from './projects/sections/controller';
import Forms from './projects/sections/forms';
import IndexFields from './projects/sections/index-fields';
import ZipFile from './projects/zip-file';

if ($('.admin-project').length) {
    new Sidebar();
    new TableFields();
    new Seeder();
    new Model();
    new Relationships();
    new Validation();
    new Controller();
    new Forms();
    new IndexFields();
    new ZipFile();
}
