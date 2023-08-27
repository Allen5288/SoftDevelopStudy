import java.awt.*;

public class Tree {
    private double heightFt; // these all non-static member values
    private double trunkDiameterInches;
    private TreeType treeType;
    protected static Color TRUNK_COLOR = new Color(102, 51, 0); // static member
    
    Tree(double heightFt, double trunkDiameterInches, TreeType treeType) { // constructor
        this.heightFt = heightFt;
        this.trunkDiameterInches = trunkDiameterInches;
        this.treeType = treeType;
    }

    public void grow() {
        this.heightFt = this.heightFt + 10;
        this.trunkDiameterInches = this.trunkDiameterInches + 1;
    }

    public double getHeightFt() {
        return heightFt;
    }

    public double getTrunkDiameterInches() {
        return trunkDiameterInches;
    }

    public void setTrunkDiameterInches(double trunkDiameterInches) {
        this.trunkDiameterInches = trunkDiameterInches;
    }

    public TreeType getTreeType() {
        return treeType;
    }

    public static void announceTree() {
        System.out.println("Look out fir that " + 
            TRUNK_COLOR + "tree!");
    }

    public void announceTallTree() {
        if (this.heightFt > 100) {
            System.out.println("That a tall tree!" + 
                this.treeType + " tree!");
        }
    }
}