import { Product } from 'src/features/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';

@Entity()
export class ProductImage {

    @Column({ type: 'uuid' })
    @PrimaryGeneratedColumn()
    public id!: string;

    @Column({ type: 'varchar' })
    public name: string;

    @Column({ type: 'bytea' })
    data: any

    @Column({ type: 'varchar' })
    imagedata: string

    // @Column({ type: 'boolean', default: false })
    // public isDeleted: boolean;

    // @Column({ type: 'uuid' })

    /*
     * Create and Update Date Columns
     */

    @CreateDateColumn({ type: 'timestamp' })
    public created_at!: Date;

    // @OneToOne(() => Product, (product) => product.imageId)
    // product: Product;

    // @UpdateDateColumn({ type: 'timestamp' })
    // public updated_at!: Date;
}