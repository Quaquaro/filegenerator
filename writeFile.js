const fs = require('fs');

const template = {
  component: name => {
    const componentString = `import styled from 'styled-components'
        export default function ${name}() {
            return <div>${name}</div>
        }
        `;
    return componentString;
  },
  spec: name => {
    const specString = `import { render, screen } from '@testing-library/react';
    import ${name} from './${name}.js';

    describe('${name}', () => {
      it('render...', () => {
        render(<${name} />);
        expect(screen.getByText('${name}')).toBeInTheDocument();
      });
    });
    `;
    return specString;
  },
  stories: name => {
    const storiesString = `import ${name} from './${name}.js';
    export default {
      title: 'Component/${name}',
      component: ${name},
    }
      const Template = args => <${name} {...args} />

      export const Default = Template.bind({})
      Default.args = {}
    `;
    return storiesString;
  },
};

function writeFile(name, fileType) {
  const fileName =
    fileType === 'component' ? `./${name}.js` : `./${name}.${fileType}.js`;

  const fileString = template[fileType](name);

  fs.writeFileSync(fileName, fileString);
}

module.exports = { writeFile };
