import { NextContext, NextFunctionComponent } from 'next';
import Layout from '../components/Layout';
import List from '../components/List';
import DataObject from '../interfaces';

interface Props {
    items: DataObject[];
}

const ListFunction: NextFunctionComponent<Props> = ({ items }) => (
    <Layout title="List Example (with Function Components) | Next.js + TypeScript Example">
        <List items={items} />
    </Layout>
);

ListFunction.getInitialProps = async ({ pathname }: NextContext) => {
    // Example for including initial props in a Next.js function compnent page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const dataArray: DataObject[] = [
        { id: 101, name: 'larry' },
        { id: 102, name: 'sam' },
        { id: 103, name: 'jill' },
        { id: 104, name: pathname }
    ];

    return { items: dataArray };
};

export default ListFunction;
